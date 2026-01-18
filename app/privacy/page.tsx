import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
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
                    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-gray-400 mb-6">
                        Last updated: January 18, 2026
                    </p>

                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                            <p>
                                KetiveeAI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy
                                and is committed to protecting your personal data. This Privacy Policy explains
                                how we collect, use, and safeguard information when you use the Reox compiler,
                                website, and related services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                            <h3 className="text-lg font-medium text-gray-200 mt-4 mb-2">2.1 Compiler Usage</h3>
                            <p>
                                The Reox compiler does <strong>NOT</strong> collect any personal data.
                                It operates entirely offline and does not phone home or send telemetry.
                            </p>

                            <h3 className="text-lg font-medium text-gray-200 mt-4 mb-2">2.2 Website</h3>
                            <p>When you visit our website, we may collect:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent</li>
                                <li>Referral source</li>
                            </ul>
                            <p className="mt-2">
                                This data is collected anonymously through analytics and is used solely to
                                improve our website experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Information</h2>
                            <p>We use collected information to:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Improve website functionality and user experience</li>
                                <li>Analyze usage trends and statistics</li>
                                <li>Respond to support requests</li>
                                <li>Send important updates (only if you opt-in)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
                            <p>
                                We do <strong>NOT</strong> sell, rent, or share your personal information
                                with third parties for marketing purposes. We may share data only:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>With service providers who assist our operations</li>
                                <li>When required by law</li>
                                <li>To protect our rights or safety</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
                            <p>
                                Our website uses essential cookies for functionality. We do not use
                                tracking cookies. You can disable cookies in your browser settings,
                                though some features may not work properly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
                            <p>
                                We implement appropriate security measures to protect your information.
                                However, no internet transmission is 100% secure, and we cannot guarantee
                                absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of communications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
                            <p>
                                Our services are not directed to children under 13. We do not knowingly
                                collect information from children. If you believe we have collected data
                                from a child, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy periodically. Changes will be posted
                                on this page with an updated revision date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
                            <p>
                                For privacy-related questions, contact us at:{" "}
                                <a href="mailto:privacy@ketivee.com" className="text-primary hover:underline">
                                    privacy@ketivee.com
                                </a>
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm">
                        <Link href="/eula" className="text-primary hover:underline">
                            End User License Agreement
                        </Link>
                        <Link href="/license" className="text-primary hover:underline">
                            Open Source License
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
