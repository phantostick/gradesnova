// components/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const EXAM_LINKS = [
  { name: 'SAT Calculator', href: '/exams/sat', icon: '📐' },
  { name: 'ACT Calculator', href: '/exams/act', icon: '✏️' },
  { name: 'GRE Calculator', href: '/exams/gre', icon: '🎓' },
  { name: 'LSAT Calculator', href: '/exams/lsat', icon: '⚖️' },
  { name: 'GCSE Boundaries', href: '/exams/gcse', icon: '🏫' },
  { name: 'A-Level Boundaries', href: '/exams/a-levels', icon: '📚' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0a0c14]/80 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/image.svg"
              alt="GradesNova Logo"
              width={32}
              height={32}
              className="group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-xl tracking-tight text-white">
              Grades<span className="text-emerald-400">Nova</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                Calculators
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 origin-top transition-all duration-150 ease-out ${
                  dropdownOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-[#12141f] border border-white/10 rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                  {EXAM_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        pathname === link.href
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-base">{link.icon}</span>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Upgraded Links */}
            <Link href="/#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Methodology
            </Link>

            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-[#0d0f1a] border-b border-white/10 overflow-hidden grid transition-all duration-200 ease-out ${
          mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 px-4 py-5 space-y-5">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">Calculators</p>
            <div className="grid grid-cols-2 gap-2">
              {EXAM_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    pathname === link.href
                      ? 'bg-white/10 text-white font-medium'
                      : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span className="truncate">{link.name.split(' ')[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 space-y-1">
            <Link
              href="/#how-it-works"
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Methodology
            </Link>
            <Link
              href="/blog"
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Score Guides
              <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                New
              </span>
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
