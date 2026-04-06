// const Stats = () => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 text-center bg-blue-300 py-10">
//       <div>
//         <h2 className="text-2xl text-primary">10K+</h2>
//         <p>Users</p>
//       </div>
//       <div>
//         <h2 className="text-2xl text-primary">500+</h2>
//         <p>Templates</p>
//       </div>
//       <div>
//         <h2 className="text-2xl text-primary">99%</h2>
//         <p>Success</p>
//       </div>
//       <div>
//         <h2 className="text-2xl text-primary">24/7</h2>
//         <p>Support</p>
//       </div>
//     </div>
//   );
// };

// export default Stats;
const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 text-center">
        <div>
          <h1 className="text-3xl font-bold">50K+</h1>
          <p>Active Users</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">200+</h1>
          <p>Premium Tools</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">4.9</h1>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;