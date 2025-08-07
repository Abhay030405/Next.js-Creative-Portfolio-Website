"use client";

import React from "react";
import { motion } from "framer-motion";

const CodingStats = () => {
  return (
    <>
      {/* LeetCode Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="col-span-full sm:col-span-4 custom-bg p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground">LeetCode</h3>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-muted text-sm mb-2">Competitive Programming Profile</p>
            <p className="text-foreground text-lg font-semibold mb-4">absolutabhay</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted">Username</span>
              <span className="text-accent font-semibold">absolutabhay</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Platform</span>
              <span className="text-orange-400 font-semibold">LeetCode</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Status</span>
              <span className="text-green-400 font-semibold">Active</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-accent/20">
            <a 
              href="https://leetcode.com/absolutabhay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View LeetCode Profile
            </a>
          </div>
        </div>
      </motion.div>

      {/* Codeforces Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="col-span-full sm:col-span-4 custom-bg p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground">Codeforces</h3>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-muted text-sm mb-2">Competitive Programming Profile</p>
            <p className="text-foreground text-lg font-semibold mb-4">absolutabhay</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted">Username</span>
              <span className="text-accent font-semibold">absolutabhay</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Platform</span>
              <span className="text-blue-400 font-semibold">Codeforces</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Status</span>
              <span className="text-green-400 font-semibold">Active</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-accent/20">
            <a 
              href="https://codeforces.com/profile/absolutabhay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Codeforces Profile
            </a>
          </div>
        </div>
      </motion.div>

      {/* Kaggle Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="col-span-full sm:col-span-4 custom-bg p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground">Kaggle</h3>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-muted text-sm mb-2">Data Science Profile</p>
            <p className="text-foreground text-lg font-semibold mb-4">abhayondata</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted">Username</span>
              <span className="text-accent font-semibold">abhayondata</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Platform</span>
              <span className="text-purple-400 font-semibold">Kaggle</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Status</span>
              <span className="text-green-400 font-semibold">Active</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-accent/20">
            <a 
              href="https://www.kaggle.com/abhayondata" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Kaggle Profile
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CodingStats;
