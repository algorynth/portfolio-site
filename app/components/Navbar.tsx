'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavLink {
    href: string;
    label: string;
}

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const links: NavLink[] = [
        { href: '/', label: 'Ana Sayfa' },
        { href: '/apps', label: 'Projeler' },
        { href: '/team', label: 'Ekip' },
        { href: '/#contact', label: 'İletişim' },
    ];

    return (
        <nav className="nav">
            <div className="container nav-content">
                <Link href="/" className="nav-logo">algorynth</Link>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menü"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
