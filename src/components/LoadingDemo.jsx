"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  LoadingSpinner,
  LoadingDots,
  LoadingPulse,
  LoadingSkeleton,
  LoadingScreen,
  LoadingButton,
  LoadingCard
} from "./index";

const LoadingDemo = ({ className }) => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleButtonClick = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 3000);
  };

  return (
    <div className={clsx("p-8 space-y-12", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-foreground">
          Loading Components
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          A collection of loading components designed to match your portfolio's theme with glass morphism effects and smooth animations.
        </p>
      </motion.div>

      {/* Loading Spinners */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Loading Spinners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["sm", "md", "lg", "xl"].map((size) => (
            <div key={size} className="custom-bg p-6 rounded-xl text-center">
              <LoadingSpinner size={size} className="mb-4" />
              <p className="text-sm text-muted capitalize">{size}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loading Dots */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Loading Dots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["sm", "md", "lg"].map((size) => (
            <div key={size} className="custom-bg p-6 rounded-xl text-center">
              <LoadingDots size={size} className="mb-4" />
              <p className="text-sm text-muted capitalize">{size}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loading Pulse */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Loading Pulse</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["sm", "md", "lg", "xl"].map((size) => (
            <div key={size} className="custom-bg p-6 rounded-xl text-center">
              <LoadingPulse size={size} className="mb-4" />
              <p className="text-sm text-muted capitalize">{size}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loading Skeleton */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Loading Skeleton</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="custom-bg p-6 rounded-xl">
            <h3 className="text-lg font-medium text-foreground mb-4">Basic Skeleton</h3>
            <LoadingSkeleton lines={4} />
          </div>
          <div className="custom-bg p-6 rounded-xl">
            <h3 className="text-lg font-medium text-foreground mb-4">With Avatar</h3>
            <LoadingSkeleton lines={3} showAvatar={true} />
          </div>
        </div>
      </section>

      {/* Loading Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Loading Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LoadingCard showImage={true} lines={3} />
          <LoadingCard showImage={false} lines={4} />
          <LoadingCard showImage={true} showAvatar={true} lines={2} />
        </div>
      </section>

      {/* Loading Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Loading Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="custom-bg p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-medium text-foreground">Primary</h3>
            <LoadingButton
              loading={buttonLoading}
              onClick={handleButtonClick}
              variant="primary"
            >
              Click to Load
            </LoadingButton>
          </div>
          <div className="custom-bg p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-medium text-foreground">Secondary</h3>
            <LoadingButton
              loading={buttonLoading}
              onClick={handleButtonClick}
              variant="secondary"
            >
              Click to Load
            </LoadingButton>
          </div>
          <div className="custom-bg p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-medium text-foreground">Outline</h3>
            <LoadingButton
              loading={buttonLoading}
              onClick={handleButtonClick}
              variant="outline"
            >
              Click to Load
            </LoadingButton>
          </div>
        </div>
      </section>

      {/* Full Screen Loading Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Full Screen Loading</h2>
        <div className="text-center">
          <LoadingButton
            onClick={() => setShowFullScreen(true)}
            variant="primary"
            size="lg"
          >
            Show Full Screen Loading
          </LoadingButton>
        </div>
      </section>

      {/* Full Screen Loading Overlay */}
      {showFullScreen && (
        <LoadingScreen
          message="Loading your experience..."
          onAnimationComplete={() => {
            setTimeout(() => setShowFullScreen(false), 3000);
          }}
        />
      )}
    </div>
  );
};

export default LoadingDemo;