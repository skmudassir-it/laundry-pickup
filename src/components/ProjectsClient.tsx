"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const categories = ["All", "Commercial", "Specialty"];

export default function ProjectsClient() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(v: string | null) => setActiveTab(v || "All")}
        className="mb-10"
      >
        <TabsList variant="default" className="mx-auto mb-8">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="glass-card flex flex-col h-full overflow-hidden">
                    <div className="aspect-video w-full bg-gradient-to-br from-teal-100 to-emerald-50 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faFolderOpen}
                        className="h-10 w-10 text-primary/30"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <Badge variant="secondary" className="w-fit mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
