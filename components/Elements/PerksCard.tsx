import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  Card,
} from "@nextui-org/react";

export default function PerksCard({
  imageURL,
  title,
  subtitle,
  modalText,
}: {
  imageURL: string;
  title: string;
  subtitle?: string;
  modalText?: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card
        data-aos="fade-up"
        className={` mx-5 w-auto lg:rounded-lg min-h-full md:h-[300px] h-[200px] bg-cover bg-fill px-4 md:mx-0 md:text-center shadow-lg`}
        style={{
          backgroundImage: `url('${imageURL}')`,
        }}
      >
        <h2 className="font-bold mx-auto text-3xl text-white mt-10 md:mt-20 mb-2">
          {title}
        </h2>
        <h3 className="font-bold text-center text-lg text-white mt-2 mb-10 mx-10 outline-2">
          {subtitle}
        </h3>
        <Button
          className="w-36 bg-white mx-auto font-bold"
          onPress={onOpen}
        >
          More Info
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 font-bold text-2xl">
                  {title}
                </ModalHeader>
                <ModalBody>
                  <p>{modalText}</p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onPress={onClose}
                    as={Link}
                    href="/services"
                    className="bg-[#FF82B6]"
                  >
                    I need this!
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    className="bg-[#4239DC]"
                  >
                    Great Thanks!
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </>
  );
}
