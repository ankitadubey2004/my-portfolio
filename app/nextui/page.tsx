import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NextUIProofPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-[60px] pt-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        My Contributions to NextUI
      </h1>
      <Image
        src="https://cdn.discordapp.com/attachments/1257551991270412308/1265160454494355466/IMG_6072.png?ex=67756a3d&is=677418bd&hm=4fa195a413771432ce8fcbb4783c8f68c28efd9b7cf39ef9e3200a3fe9f8eb6b&" // Replace this with the actual path to your screenshot
        alt="Offer from CEO"
        width={350}
        height={200}
        className="rounded-lg shadow-lg mb-6"
      />
      <Link
        href="https://github.com/nextui-org/nextui/pulls?q=is%3Apr+author%3Aawesome-pro"
        passHref
      >
        <p className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          View my contributions on GitHub
        </p>
      </Link>
    </div>
  );
}

export default NextUIProofPage;
