'use client'

import { useState } from 'react'

type Tool = {
  name: string
  category: 'coding' | 'content' | 'productivity'
  description: string
  rating: number
}

const aiTools: Tool[] = [
  {
    name: 'Cursor',
    category: 'coding',
    description: 'AI-first code editor built for pair programming with AI',
    rating: 4.8
  },
  {
    name: 'ChatGPT',
    category: 'content',
    description: 'Conversational AI for content generation and brainstorming',
    rating: 4.5
  },
  {
    name: 'Claude',
    category: 'content',
    description: 'Advanced AI assistant with strong reasoning capabilities',
    rating: 4.7
  },
  {
    name: 'GitHub Copilot',
    category: 'coding',
    description: 'AI pair programmer that offers code suggestions',
    rating: 4.6
  },
  {
    name: 'Notion AI',
    category: 'productivity',
    description: 'AI writing assistant integrated into Notion',
    rating: 4.3
  },
  {
    name: 'Midjourney',
    category: 'content',
    description: 'AI image generation tool for creating visual content',
    rating: 4.9
  }
]

export default function AiToolsOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const filteredTools = selectedCategory 
    ? aiTools.filter(tool => tool.category === selectedCategory)
    : aiTools
  
  return (
    <div>
      <p>
        The AI landscape is evolving rapidly, with new tools emerging constantly.
        Here's an interactive overview of some of the best AI tools for developers
        and content creators in 2025.
      </p>
      
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">AI Tools Overview</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Filter by category:</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded ${
                selectedCategory === null 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('coding')}
              className={`px-4 py-2 rounded ${
                selectedCategory === 'coding' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Coding
            </button>
            <button
              onClick={() => setSelectedCategory('content')}
              className={`px-4 py-2 rounded ${
                selectedCategory === 'content' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setSelectedCategory('productivity')}
              className={`px-4 py-2 rounded ${
                selectedCategory === 'productivity' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Productivity
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTools.map((tool) => (
            <div key={tool.name} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{tool.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {tool.category}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{tool.description}</p>
              <div className="flex items-center">
                <div className="text-yellow-500 mr-1">★</div>
                <span>{tool.rating} / 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p>
        By using React components for our blog posts, we can create interactive
        filtering, sorting, and visualization features that would be difficult to
        implement with traditional static blog approaches.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Benefits of AI Integration</h2>
      <p>
        Integrating AI tools into your workflow can dramatically increase productivity
        and creativity. As we move further into 2025, we're seeing more specialized
        AI tools that focus on specific domains and use cases.
      </p>
      
      <div className="my-6 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Reader Poll</h3>
        <p className="mb-4">Which category of AI tools do you find most valuable?</p>
        <div className="space-y-2">
          <button className="w-full text-left p-3 bg-white border rounded hover:bg-gray-50">
            Coding assistants
          </button>
          <button className="w-full text-left p-3 bg-white border rounded hover:bg-gray-50">
            Content generation
          </button>
          <button className="w-full text-left p-3 bg-white border rounded hover:bg-gray-50">
            Productivity tools
          </button>
          <button className="w-full text-left p-3 bg-white border rounded hover:bg-gray-50">
            Data analysis
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          This is a demonstration of how you could embed interactive elements
          like polls or surveys directly in your blog posts.
        </p>
      </div>
    </div>
  )
} 