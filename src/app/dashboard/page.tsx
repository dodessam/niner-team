"use client";

import { useState } from "react";
import {
  Video,
  Square,
  FileText,
  ClipboardList,
  HelpCircle,
  FileArchive,
  Plus,
  Play,
  Download,
  Clock,
  ChevronDown,
  LogOut,
  Lock,
  ArrowRight,
  CheckCircle,
  Circle,
} from "lucide-react";

type TabType = "content" | "flashcards" | "materials" | "homework" | "quiz" | "pastpapers";

const contentVideos = [
  {
    id: 1,
    title: "Cell Biology",
    description: "Structure and function of cells",
    thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=225&fit=crop",
    duration: "15:30",
  },
  {
    id: 2,
    title: "Atomic Structure",
    description: "Understanding atoms and elements",
    thumbnail: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=225&fit=crop",
    duration: "22:45",
  },
  {
    id: 3,
    title: "Forces & Motion",
    description: "Newton's laws and kinematics",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
    duration: "18:20",
  },
  {
    id: 4,
    title: "Chemical Reactions",
    description: "Types and rates of reactions",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=225&fit=crop",
    duration: "20:15",
  },
];

const materials = [
  {
    id: 1,
    title: "IGCSE Combined Science Syllabus",
    description: "Syllabus 2024-2026",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "Revision Guide - Biology",
    description: "Complete notes and diagrams",
    type: "PDF",
    size: "5.1 MB",
  },
  {
    id: 3,
    title: "Formula Sheet",
    description: "Physics & Chemistry formulas",
    type: "PDF",
    size: "890 KB",
  },
  {
    id: 4,
    title: "Past Paper Mark Schemes",
    description: "2020-2023 mark schemes",
    type: "ZIP",
    size: "12.3 MB",
  },
];

const homeworks = [
  {
    id: 1,
    title: "Cell Biology Assignment",
    description: "Chapter 1-3 review questions",
    dueDate: "March 20, 2026",
    status: "pending",
  },
  {
    id: 2,
    title: "Atomic Structure Quiz",
    description: "Online quiz on atoms",
    dueDate: "March 25, 2026",
    status: "submitted",
  },
  {
    id: 3,
    title: "Forces Practice Problems",
    description: "10 problems to solve",
    dueDate: "March 28, 2026",
    status: "pending",
  },
];

const quizData = {
  available: true,
  title: "Mid-Term Assessment",
  topics: "B1-B4 (Biology)",
  questions: 25,
  time: "45 minutes",
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("content");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showQuizEnabled, setShowQuizEnabled] = useState(false);

  const tabs = [
    { id: "content" as TabType, label: "Content", icon: Video },
    { id: "flashcards" as TabType, label: "Flashcards", icon: Square },
    { id: "materials" as TabType, label: "Materials", icon: FileText },
    { id: "homework" as TabType, label: "Homework", icon: ClipboardList },
    { id: "quiz" as TabType, label: "Quiz", icon: HelpCircle },
    { id: "pastpapers" as TabType, label: "Pastpapers", icon: FileArchive },
  ];

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-textPrimary">Niner Team</h1>
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors"
            >
              <span className="text-sm">user@email.com</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-textSecondary hover:text-textPrimary hover:bg-background transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isQuizDisabled = tab.id === "quiz" && !showQuizEnabled;
              return (
                <button
                  key={tab.id}
                  onClick={() => !isQuizDisabled && setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-accent text-textPrimary"
                      : isQuizDisabled
                      ? "border-transparent text-disabled cursor-not-allowed"
                      : "border-transparent text-textSecondary hover:text-textPrimary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "content" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-textPrimary">Content</h2>
              <button className="flex items-center gap-2 bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md transition-colors">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {contentVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-textPrimary mb-1">{video.title}</h3>
                    <p className="text-sm text-textSecondary">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "flashcards" && (
          <div className="flex items-center justify-center min-h-96">
            <div className="bg-card border border-border rounded-lg p-12 text-center max-w-md">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                <Square className="w-8 h-8 text-textSecondary" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-3">Coming Soon</h3>
              <p className="text-textSecondary">
                Advanced flashcard system is currently in development. Stay tuned for an
                enhanced study experience.
              </p>
            </div>
          </div>
        )}

        {activeTab === "materials" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-textPrimary">Materials</h2>
              <button className="flex items-center gap-2 bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md transition-colors">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-4">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="bg-card border border-border rounded-lg p-5 flex items-center justify-between hover:border-accent transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-textPrimary">{material.title}</h3>
                      <p className="text-sm text-textSecondary">
                        {material.description} • {material.type} • {material.size}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-textSecondary hover:text-accent transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "homework" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-textPrimary">Homework</h2>
              <button className="flex items-center gap-2 bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-md transition-colors">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-4">
              {homeworks.map((homework) => (
                <div
                  key={homework.id}
                  className="bg-card border border-border rounded-lg p-5 flex items-center justify-between hover:border-accent transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                      {homework.status === "submitted" ? (
                        <CheckCircle className="w-6 h-6 text-success" />
                      ) : (
                        <ClipboardList className="w-6 h-6 text-warning" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-textPrimary">{homework.title}</h3>
                      <p className="text-sm text-textSecondary">{homework.description}</p>
                      <p className="text-sm text-textSecondary mt-1">
                        Due: {homework.dueDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        homework.status === "submitted"
                          ? "bg-success/20 text-success"
                          : "bg-warning/20 text-warning"
                      }`}
                    >
                      {homework.status === "submitted" ? "Submitted" : "Pending"}
                    </span>
                    <button className="text-textSecondary hover:text-accent transition-colors flex items-center gap-1">
                      View
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="flex items-center justify-center min-h-96">
            {!showQuizEnabled ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center max-w-md">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-disabled" />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  Quiz Unavailable
                </h3>
                <p className="text-textSecondary mb-6">
                  No exam scheduled yet. Check back later for upcoming quizzes.
                </p>
                <button
                  onClick={() => setShowQuizEnabled(true)}
                  className="text-sm text-accent hover:underline"
                >
                  Preview enabled state
                </button>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-12 text-center max-w-md w-full">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">
                  {quizData.title}
                </h3>
                <div className="space-y-2 text-textSecondary mb-8">
                  <p>Topics: {quizData.topics}</p>
                  <p>Questions: {quizData.questions}</p>
                  <p>Time: {quizData.time}</p>
                </div>
                <button className="w-full bg-accent hover:bg-accentHover text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2">
                  Start Quiz
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowQuizEnabled(false)}
                  className="text-sm text-textSecondary hover:text-textPrimary mt-4 transition-colors"
                >
                  Show disabled state
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "pastpapers" && (
          <div className="flex items-center justify-center min-h-96">
            <div className="bg-card border border-border rounded-lg p-12 text-center max-w-md">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                <FileArchive className="w-8 h-8 text-textSecondary" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-3">
                Integration Coming Soon
              </h3>
              <p className="text-textSecondary">
                Past paper tracker will be imported from the existing application.
                Stay tuned for updates.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
