"use client";
import { useModal } from "../../utils/useModal";
import Atropos from "atropos/react";
import { projects } from "../../staticData";
import Aos from "../../utils/Aos";
import BackendFront from "@/components/templates/BackendFront";

export default function Home() {
  const { openModal, closeModal, Modal } = useModal();

  return (
    <div className="w-full flex flex-col">
      {" "}
      <div className="w-full h-screen flex justify-between items-center p-20">
        <Modal>
          <div className="w-[50rem] h-[50rem] rounded-3xl backdrop-blur-sm p-8 text-3xl flex flex-col items-center gap-6 text-first text-center leading-normal">
            سلام! من محمدرضا عباس‌زاده هستم، ۲۲ ساله و دانشجوی رشته حسابداری. با
            بیش از ۲ سال تجربه و علاقه در زمینه برنامه‌نویسی و توسعه وب،
            توانسته‌ام مهارت‌های خود را در تکنولوژی‌های مختلفی ارتقا بدهم.
            تخصص‌ها و مهارت‌های من شامل: Frontend: HTML، CSS، Tailwind CSS،
            JavaScript، React.js، Next.js Backend: Node.js، TypeScript، API
            نویسی، MongoDB، MySQL Real-time: Socket.io سایر مهارت‌ها: مدیریت
            دیتابیس‌ها و ایجاد رابط‌های کاربری جذاب و بهینه همچنین، در حال حاضر
            در حال یادگیری و بهبود مهارت‌هایم در این زمینه هستم تا به یک
            توسعه‌دهنده وب حرفه‌ای تبدیل شوم. اگر به دنبال فردی مشتاق، متعهد و
            آماده برای چالش‌های جدید هستید، خوشحال می‌شوم بخشی از تیم شما باشم
            یا در پروژه‌های جذابتان همکاری کنم.
            <button
              className="px-8 pb-4 py-2 text-3xl font-light active:scale-95 rounded-xl bg-black border-2 border-first shadow-md"
              onClick={closeModal}
            >
              بستن
            </button>
          </div>
        </Modal>
        <Aos />
        <div className="projects flex flex-col gap-8">
          <div className="w-full flex flex-wrap gap-16 items-start">
            {projects.map((card, index) => (
              <Atropos
                key={index}
                data-aos="fade-left"
                data-aos-duration={card.duration}
                activeOffset={30}
                shadow={false}
                duration={100}
              >
                <div className="flex flex-col items-center justify-center gap-4 bg-black rounded-xl border-2 border-first child:p-9 h-auto">
                  <p className="text-3xl font-bold pb-4 border-b-2 border-first/50">
                    {card.title}
                  </p>
                  <p className="text-2xl">{card.technologies}</p>
                  {card.description && (
                    <p className="font-bold">{card.description}</p>
                  )}
                </div>
              </Atropos>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="description w-[100rem] flex flex-col items-center mt-20"
        >
          <div className="size-[40rem] rounded-full border-2 border-first c-shadow"></div>
          <div className="w-full rounded-xl !bg-black -mt-24">
            <div className="w-full rounded-xl bg-gradient-to-b from-black to-white/10 p-6 pb-16 flex flex-col items-center gap-6 text-3xl text-white leading-normal">
              سلام! من محمدرضا عباس‌زاده هستم، ۲۲ ساله و دانشجوی رشته حسابداری.
              با بیش از ۲ سال تجربه و علاقه در زمینه برنامه‌نویسی و توسعه وب،
              توانسته‌ام مهارت‌های خود را در تکنولوژی‌های مختلفی ارتقا بدهم....
            </div>
          </div>

          <svg
            onClick={openModal}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="stroke-first/40 text-gray size-20 -mt-12 active:scale-95 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <BackendFront />
    </div>
  );
}
