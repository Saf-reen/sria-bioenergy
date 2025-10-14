import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using the SRIA BIOENERGY website, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on SRIA BIOENERGY's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="mb-4">Under this license, you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <p>
                The materials on SRIA BIOENERGY's website are provided on an 'as is' basis. SRIA BIOENERGY makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitations</h2>
              <p>
                In no event shall SRIA BIOENERGY or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Revisions</h2>
              <p>
                SRIA BIOENERGY may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to:{" "}
                <a href="mailto:legal@sriabioenergy.com" className="text-primary hover:underline">
                  legal@sriabioenergy.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
