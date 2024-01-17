import Close from '../assets/close-circle.svg';
import { useState } from 'react';
import { SuccessModal } from './SuccessModal';

export const OtpModal = ({ showModal, setShowModal }) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSuccessModalOpen = () => {
      setShowSuccessModal(true);
    };

  return (
    <>
      {showModal ? 
        <div className="w-[100%] h-[200vh] bg-[rgba(0,0,0,0.4)] fixed flex  items-center justify-center]">
          <div className="bg-light-200 w-[100%] h-[160vh] rounded-s-[50px] rounded-e-[50px] flex justify-center relative pb-7">
            <div className="flex-col text-center mt-16">
              <div className="flex-col">
                <h3 className="font-sfMedium text-2xl">Security</h3>
                <p className="text-secondary-100 font-sfRegular">
                  Enter your security pin code sent to your v****g@gmail.com
                </p>
              </div>
              <div className="flex gap-3 mt-14">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength="1"
                    className="w-[8vw] h-[17vh] border border-secondary-700 rounded-[5px] bg-secondary-400 text-center text-lg"
                    value={value}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </div>
              <button onClick={handleSuccessModalOpen} className="rounded-[5px] font-sfMedium py-6 px-16 bg-dark-100 text-light-200 mt-12">
                Continue
              </button>
              <img
                onClick={() => setShowModal((prev) => !prev)}
                aria-label="Close Modal"
                className="cursor-pointer absolute w-[30px] h-[30px] top-5 end-10"
                src={Close}
                alt="close-icon"
              />
            </div>
          </div>
        </div>: null
      }
      {showSuccessModal && <SuccessModal showModal={showSuccessModal} setShowModal={setShowSuccessModal} />}
    </>
  );
};
