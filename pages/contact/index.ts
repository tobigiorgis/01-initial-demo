
import { Inter } from '@next/font/google'
import { MainLayout } from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <MainLayout>
        <div>
            <p>
            Get started by editing&nbsp;
            <code>pages/contact.js</code>
            </p>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Page
                </a>
            </div>
        </div>
    </MainLayout>
    )
}