import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function MaintenancePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071f3f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.32),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(59,130,246,0.28),transparent_30%),linear-gradient(135deg,#061b38_0%,#123a78_58%,#071f3f_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 top-24 h-48 w-48 rounded-full border border-white/15 bg-white/5 blur-sm"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 24, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-20 h-64 w-64 rounded-full border border-secondary/20 bg-secondary/10 blur-sm"
      />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="w-full max-w-3xl rounded-[2rem] border border-white/15 bg-white/10 p-6 text-center shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-10"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 13, delay: 0.15 }}
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/30 bg-white p-2 shadow-xl shadow-secondary/30"
          >
            <Logo size="large" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mb-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
            style={{ fontFamily: "'Hachi Maru Pop', cursive" }}
          >
            Kijana Simama
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="mx-auto max-w-2xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl"
          >
            Site is down for now.
            <span className="block text-secondary">We will be back soon!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.55 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-blue-50 sm:text-lg"
          >
            We are making a few updates so we can serve young people and our community better. Thank you for your patience.
          </motion.p>
        </motion.section>
      </main>
    </div>
  );
}
