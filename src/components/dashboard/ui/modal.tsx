import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type ModalProps = {
  title: string;
  descriptionText: string;
  btnText: string;
  btnSecondaryText: string;
  onClose: () => void;
};

export default function Modal({
  title,
  descriptionText,
  btnSecondaryText,
  btnText,
  onClose,
}: ModalProps) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    onClose(); // Call the onClose prop when closing the modal
  }
  return (
    <>
      {/* The button to open the modal is removed from here, as it's not needed in this component */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{descriptionText}</p>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-sm border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-gray-200 focus:outline-none transition-all"
                      onClick={closeModal}
                    >
                      {btnSecondaryText}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-sm border border-transparent bg-primary px-4 py-2 text-sm font-medium text-gray-200 hover:bg-primary/90 focus:outline-none transition-all"
                      onClick={closeModal}
                    >
                      {btnText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
