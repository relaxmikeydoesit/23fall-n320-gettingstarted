import React from "react";
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';

export default function Home() {
  return (
  <>
  <Hero heroImage='/hero.jpg' height='400px' header='main header' />
  <h1 className={styles.bigRed}>HOME</h1>

  <p>This is the landing page for our Next.js app.</p>
  <p className={styles.blueFont}>It is a static page that is rendered at build time, and this paragraph should be blue.</p>
  
  </>  
  )
}