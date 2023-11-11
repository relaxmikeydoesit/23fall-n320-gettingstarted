import React from "react";
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Card from '@/components/Card';



export default function Home() {
  return (
  <>
  <Hero heroImage='/hero.jpg' height='400px' header='main header' />
  <Navbar className={styles.navbar} style={{}}>
  <Link href='/'>Home ||</Link>
  <Link href='/'>About || </Link>
  <Link href='/'>Contact ||</Link>
  <Link href='/'>Need Help?</Link>
  </Navbar>
  
  <div className={styles.cards}>
  <h1 className={styles.yellowFont}>HOME</h1>
  <p className={styles.whiteFont}>This is the landing page for our Next.js app. It is a static page that is rendered at build time, and this paragraph should be white and italic.</p> 
  </div>
 <Card className={styles.card} style={{}}>
  <h1 className={styles.yellowFont}>ABOUT</h1>
  </Card>
 
</>
  )
}