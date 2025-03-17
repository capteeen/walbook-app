"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Wallet, Shield, Search, QrCode, ChevronRight, Copy } from "lucide-react"
import Link from "next/link"
import { motion, LazyMotion, domAnimation } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

// Floating animation for icons
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Card hover animation
const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: {
    scale: 0.98
  }
}

// Stagger container for lists
const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
}

// Slide in animation
const slideIn = {
  hidden: { x: -20, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
}

// Fade up animation with spring
const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

// Pulse animation for emphasis
const pulse = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Rotate animation for icons
const rotate = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              The Future of Address Management
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white"
            >
              Your Secure Wallet Address Book
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Store and manage your blockchain addresses across multiple networks with enterprise-grade security.
            </p>
            <Link href="/addresses">
              <Button size="lg" className="group">
                Open Address Book
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Demo Section */}
        <section className="px-4 py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Future</h2>
              <p className="text-gray-600 dark:text-gray-300">See how WalBook revolutionizes address management</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl blur-3xl" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div variants={item} className="flex items-center gap-4">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={{
                          ...floatingAnimation,
                          hover: {
                            ...rotate.hover,
                            scale: 1.1
                          }
                        }}
                        className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"
                      >
                        <Wallet className="h-6 w-6 text-blue-500" />
                      </motion.div>
                      <motion.div variants={slideIn}>
                        <h3 className="font-semibold">Smart Address Detection</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Automatically identifies network type</p>
                      </motion.div>
                    </motion.div>
                    <motion.div variants={item} className="flex items-center gap-4">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={{
                          ...floatingAnimation,
                          hover: {
                            ...rotate.hover,
                            scale: 1.1
                          }
                        }}
                        className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                      >
                        <Shield className="h-6 w-6 text-green-500" />
                      </motion.div>
                      <motion.div variants={slideIn}>
                        <h3 className="font-semibold">Real-time Validation</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ensures address format correctness</p>
                      </motion.div>
                    </motion.div>
                    <motion.div variants={item} className="flex items-center gap-4">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={{
                          ...floatingAnimation,
                          hover: {
                            ...rotate.hover,
                            scale: 1.1
                          }
                        }}
                        className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                      >
                        <Search className="h-6 w-6 text-purple-500" />
                      </motion.div>
                      <motion.div variants={slideIn}>
                        <h3 className="font-semibold">Instant Search</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Find addresses in milliseconds</p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl blur-xl" />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                          <div className="text-sm font-medium">My Addresses</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <motion.div
                          variants={item}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <Wallet className="w-4 h-4 text-blue-500" />
                              </div>
                              <span className="font-medium">Main Wallet</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="pl-11">
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">0x1234...5678</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Ethereum • Personal</div>
                          </div>
                        </motion.div>
                        <motion.div
                          variants={item}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <Wallet className="w-4 h-4 text-purple-500" />
                              </div>
                              <span className="font-medium">Exchange</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="pl-11">
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">bc1q...9xyz</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Bitcoin • Exchange</div>
                          </div>
                        </motion.div>
                        <motion.div
                          variants={item}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <Wallet className="w-4 h-4 text-green-500" />
                              </div>
                              <span className="font-medium">Savings</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="pl-11">
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">sol...7890</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Solana • Savings</div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent)]"
          />
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Security is Our Priority</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We've built WalBook with a security-first approach, ensuring your addresses are always safe and private
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Local Storage Card */}
              <motion.div variants={item}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={floatingAnimation}
                      className="mb-4 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l4 4" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">Local Device Storage</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Your addresses never leave your device. All data is encrypted and stored locally, ensuring complete privacy and control.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Encryption Card */}
              <motion.div variants={item}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={floatingAnimation}
                      className="mb-4 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">AES-256 Encryption</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Military-grade encryption protects your address book. Optional password protection adds an extra layer of security.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Backup Card */}
              <motion.div variants={item}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={floatingAnimation}
                      className="mb-4 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">Secure Backups</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Export encrypted backups of your address book. Restore them on any device without compromising security.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* No Tracking Card */}
              <motion.div variants={item}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={floatingAnimation}
                      className="mb-4 w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">Zero Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      No analytics, no tracking, no telemetry. Your data stays completely private and under your control.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Offline Support Card */}
              <motion.div variants={item}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 dark:from-teal-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={floatingAnimation}
                      className="mb-4 w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">Offline First</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Works completely offline. Access your addresses anytime, anywhere, without an internet connection.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Open Source Card */}
              <motion.div variants={item}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 dark:from-indigo-500/10 dark:to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={floatingAnimation}
                      className="mb-4 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">Open Source</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Fully open source and auditable. Verify the security yourself and contribute to the development.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage your addresses</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Powerful features designed to make managing your crypto addresses simple and secure
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Multi-Network Support */}
              <motion.div variants={item}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start gap-6">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatingAnimation}
                        className="flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <Wallet className="h-8 w-8 text-blue-500" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Multi-Network Support</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          Store and manage addresses from any blockchain network. Supports Bitcoin, Ethereum, Solana, and many more.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">Bitcoin</div>
                          <div className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm">Ethereum</div>
                          <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm">Solana</div>
                          <div className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm">+More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enterprise Security */}
              <motion.div variants={item}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 dark:from-green-500/10 dark:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start gap-6">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatingAnimation}
                        className="flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Shield className="h-8 w-8 text-green-500" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          Military-grade encryption ensures your addresses are secure. Optional password protection for extra safety.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">AES-256 Encryption</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Password Protection</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Secure Storage</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Smart Organization */}
              <motion.div variants={item}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start gap-6">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatingAnimation}
                        className="flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                          <Search className="h-8 w-8 text-purple-500" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Smart Organization</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          Organize addresses with tags, categories, and smart search. Find any address in seconds.
                        </p>
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                          <div className="flex items-center gap-3 mb-3">
                            <Search className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Search by name, address, or tag</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <div className="px-2 py-1 rounded-md bg-white dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">Personal</div>
                            <div className="px-2 py-1 rounded-md bg-white dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">Exchange</div>
                            <div className="px-2 py-1 rounded-md bg-white dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">DeFi</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* QR Code Generation */}
              <motion.div variants={item}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={cardHover}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start gap-6">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatingAnimation}
                        className="flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <QrCode className="h-8 w-8 text-orange-500" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">QR Code Generation</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          Generate QR codes for easy address sharing. Perfect for mobile wallets and quick transfers.
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-700/50 p-2">
                            <div className="w-full h-full rounded bg-gray-200 dark:bg-gray-600" />
                          </div>
                          <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-700/50 p-2">
                            <div className="w-full h-full rounded bg-gray-200 dark:bg-gray-600" />
                          </div>
                          <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-700/50 p-2">
                            <div className="w-full h-full rounded bg-gray-200 dark:bg-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Token Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">WalBook Token (WBK)</h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                The native SPL token powering the WalBook ecosystem on Solana
              </p>
              <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-blue-500/10 transition-colors dark:from-blue-500/10 dark:via-purple-500/10 dark:to-blue-500/10 dark:hover:from-blue-500/20 dark:hover:via-purple-500/20 dark:hover:to-blue-500/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-lg shadow-lg p-6 max-w-xl mx-auto border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Token Address</h3>
                    <div className="flex items-center justify-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/50">
                      <code className="text-sm font-mono">WBKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText("WBKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
                        className="hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <h4 className="font-medium text-gray-600 dark:text-gray-400">Network</h4>
                      <p>Solana</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-600 dark:text-gray-400">Total Supply</h4>
                      <p>100,000,000 WBK</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 md:py-24 bg-black text-white dark:bg-white dark:text-black relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 text-gray-300 dark:text-gray-600">
              Join thousands of users who trust WalBook for their address management needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/addresses">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-800 group">
                  Open Address Book <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </LazyMotion>
  )
}
