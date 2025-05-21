import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type  actionButtonType = {
    label: string;
    callBack: () => void;
    type: string,
    disabled?: boolean
} 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  actionList: actionButtonType[]
}


export default function Modal({ isOpen, onClose, children, actionList }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50  flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow relative w-[65%] max-w-[600px]">
        <div className='max-h-[500px] overflow-scroll'>
            <button onClick={onClose} className="absolute top-2 right-2 text-xl cursor-pointer">
                &times;
            </button>
            {children}
        </div>
        <ul className='flex justify-end items-center'>
            {actionList?.map((item, _idx) => {
                return <li key={_idx} 
                    className={`flex px-[12px] py-[6px] rounded-sm cursor-pointer mr-[20px]  border-[1px] 
                        ${item.type === 'primary' ? 'text-white bg-[#325BAF] border-[#325BAF]' : 'bg-white text-[#325BAF] border-[#325BAF]'}`}>
                    <button className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" disabled={item.disabled} onClick={item.callBack}>{item.label}</button>
                </li>
            })}
        </ul>
      </div>
    </div>,
    document.getElementById('portal-root')!
  );
}
