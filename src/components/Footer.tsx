export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 px-4 py-8 text-center font-sans text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
      &copy; {new Date().getFullYear()} SMCA. All rights reserved.
    </footer>
  );
}