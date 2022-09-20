import React from 'react'
import '../styles.css'
import { API } from '../backend'
export default function Home() {
  console.log('api is',API);
  return (
    <div>
      <h1 className="text-white">hello </h1>
    </div>
  )
}
