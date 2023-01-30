import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Index from "@/components/home";
import { Alert, Space, Button } from 'antd';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, []);

  return (
    <>
      <Index />
      {visible?(
      <Alert className="absolute z-50 top-20 right-10 flex justify-center" message="Metamask Not Installed" type="error" showIcon closable />):(
      <Alert className="absolute z-50 top-20 right-10 flex justify-center" message="Metamask Installed" type="success" showIcon closable />)
    }
    </>
  );
}
