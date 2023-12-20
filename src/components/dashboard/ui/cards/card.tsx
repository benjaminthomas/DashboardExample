import React, { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import Modal from "../modal";
type Status = {
  label: string | { title: string; count: string };
  label2?: { title: string; count: string };
  count: string;
  color: string;
  textColor: string;
  resend?: boolean;
  icon: React.ElementType;
};

type Response = {
  id: number;
  title: string;
  status: Status;
};

type CardProps = Response;

export default function Card({ title, status }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResendClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="relative border-b border-r border-stroke dark:border-strokedark">
        <div className="flex justify-between px-7.5 py-7">
          <div className="flex items-stretch gap-5.5">
            <div
              className={`flex h-15 w-14.5 min-w-[3.625rem] items-center justify-center rounded-lg ${status.color}`}
            >
              <span className="text-white text-4xl">
                {status.icon && React.createElement(status.icon)}
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {title}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0">
                <span
                  className={`font-medium dark:text-gray-400 ${status.textColor}`}
                >
                  {typeof status.label === "string"
                    ? status.label
                    : status.label.title}
                  <span className="ml-1 font-bold">
                    {typeof status.label === "string" ? "" : status.label.count}
                  </span>
                </span>
                <span
                  className={`font-medium dark:text-gray-400 ${status.textColor}`}
                >
                  {status.label2 && (
                    <>
                      {status.label2.title}
                      <span className={`ml-1 font-bold`}>
                        {status.label2.count}
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-1.5 font-medium text-black dark:text-white text-2xl">
              {status.count}
              {status.resend && (
                <a
                  onClick={handleResendClick}
                  className="flex items-center justify-center rounded-lg bg-warning p-1 text-xs text-white absolute right-1 top-1 cursor-pointer"
                  aria-label="Try to resend"
                  title="Try to resend"
                >
                  <BsArrowClockwise />
                </a>
              )}
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          title="Your request was denied"
          descriptionText="Do you want to try resend it?"
          btnText="Yes"
          btnSecondaryText="No"
          onClose={handleCloseModal} // Pass onClose prop
        />
      )}
    </>
  );
}
