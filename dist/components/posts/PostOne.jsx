"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InteractiveChartDemo;
var react_1 = require("react");
var recharts_1 = require("recharts");
var data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
];
function InteractiveChartDemo() {
    var _a = (0, react_1.useState)(null), activePoint = _a[0], setActivePoint = _a[1];
    return (<div>
      <p>
        This blog post demonstrates how we can create fully interactive components
        directly within our blog posts. The chart below is built with Recharts and
        has interactive state managed within the component.
      </p>
      
      <div className="my-8 h-80">
        <recharts_1.ResponsiveContainer width="100%" height="100%">
          <recharts_1.LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} onMouseMove={function (e) {
            if (e.activeLabel) {
                setActivePoint(e.activeLabel);
            }
        }} onMouseLeave={function () { return setActivePoint(null); }}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey="name"/>
            <recharts_1.YAxis />
            <recharts_1.Tooltip />
            <recharts_1.Legend />
            <recharts_1.Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }}/>
          </recharts_1.LineChart>
        </recharts_1.ResponsiveContainer>
      </div>
      
      {activePoint && (<div className="p-4 bg-blue-50 rounded mb-6">
          <p className="font-medium">Currently hovering: {activePoint}</p>
          <p>This text updates based on user interaction with the chart above!</p>
        </div>)}
      
      <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
      <p>
        This entire blog post is a React component, giving us the power to include
        any interactive elements we want. We're using useState hooks to track user
        interactions, and we can include any React libraries we need.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Adding Custom Interactions</h2>
      <div className="my-6">
        <InteractiveDemo />
      </div>
      
      <p>
        The beauty of this approach is that we can nest custom components within our
        blog posts, keeping our code organized while providing rich, interactive experiences
        for readers.
      </p>
    </div>);
}
// A nested interactive component
function InteractiveDemo() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return (<div className="p-6 border rounded-lg bg-gray-50">
      <p className="mb-4">This is a nested interactive component with its own state:</p>
      <div className="flex items-center gap-4">
        <button onClick={function () { return setCount(function (prev) { return prev - 1; }); }} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Decrease
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button onClick={function () { return setCount(function (prev) { return prev + 1; }); }} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Increase
        </button>
      </div>
    </div>);
}
