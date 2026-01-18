import Link from "next/link";
import Image from "next/image";

export default function EulaPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="flex items-center gap-2 mb-8 group">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.svg" alt="Reox Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl">Reox</span>
                </Link>

                <div className="glass p-8 rounded-2xl">
                    <h1 className="text-3xl font-bold mb-6">End User License Agreement</h1>
                    <p className="text-gray-400 mb-6">
                        Last updated: January 18, 2026
                    </p>

                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
                            <p>
                                By downloading, installing, or using the Reox compiler and associated tools
                                (&quot;Software&quot;), you agree to be bound by this End User License Agreement
                                (&quot;EULA&quot;). If you do not agree to these terms, do not use the Software.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. License Grant</h2>
                            <p>
                                Subject to the terms of this EULA and the Apache License 2.0, KetiveeAI grants
                                you a non-exclusive, worldwide, royalty-free license to:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Download and install the Software on your devices</li>
                                <li>Use the Software to compile Reox source code</li>
                                <li>Distribute applications built with the Software</li>
                                <li>Modify the Software for your own use</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Permitted Use</h2>
                            <p>You may use the Software for:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Personal projects</li>
                                <li>Commercial software development</li>
                                <li>Educational purposes</li>
                                <li>Open source contributions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Restrictions</h2>
                            <p>You may NOT:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Remove or alter copyright notices</li>
                                <li>Use the Software to create malware or harmful applications</li>
                                <li>Misrepresent the origin of the Software</li>
                                <li>Use KetiveeAI trademarks without permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
                            <p>
                                The Software is protected by copyright and other intellectual property laws.
                                KetiveeAI retains all rights not expressly granted. The Reox name and logo
                                are trademarks of KetiveeAI.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer of Warranties</h2>
                            <p>
                                THE SOFTWARE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.
                                KETIVEEAI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                                LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                                NON-INFRINGEMENT.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
                            <p>
                                IN NO EVENT SHALL KETIVEEAI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                                CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
                            <p>
                                This license terminates automatically if you violate any of these terms.
                                Upon termination, you must cease all use and destroy all copies of the Software.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
                            <p>
                                For questions about this EULA, please contact:{" "}
                                <a href="mailto:legal@ketivee.com" className="text-primary hover:underline">
                                    legal@ketivee.com
                                </a>
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm">
                        <Link href="/license" className="text-primary hover:underline">
                            View Open Source License
                        </Link>
                        <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/" className="text-gray-400 hover:text-white">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
