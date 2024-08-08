import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { HoverBorderGradient } from "./hover-border-gradient";
import Link from "next/link";

export default function ModalDetail({ data, text }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <HoverBorderGradient
          onClick={() => handleOpen()}
          variant="flat"
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center"
        >
          {text}
        </HoverBorderGradient>
      </div>
      <Modal
      
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-black opacity-80 rounded-lg py-6"
      >
        <ModalContent className="text-white">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {data.title}
              </ModalHeader>
              <ModalBody>
                <p className="text-sm">{data.detail}</p>
              </ModalBody>
              <ModalBody>
                <p className="text-sm">Tech Stack: {data.tech}</p>
              </ModalBody>
              {data?.showDemo && (
                <ModalFooter className="py-0">
                  <Link href={data?.showDemo} className="text-sm underline">
                    show demo
                  </Link>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
