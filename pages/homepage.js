import React from "react";
import Head from 'next/head'

const HomePage = () => {
  return (
    <section class="bg-cover bg-center hero-section">
      <div class="container mx-auto p-12 max-w-4xl">
        <h1 class="text-5xl text-center font-bold text-white mb-4">
          BeatBoxx
        </h1>
        <p class="text-xl text-center font-light text-white mb-8">
          Listen to your favourite artists and songs without any hassle.
        </p>
        <div class="flex justify-center">
  <button class="bg-indigo-500 text-white py-2 px-4 rounded text-center">Get Started</button>
</div>
      </div>
    </section>
    );
};
export default HomePage;
