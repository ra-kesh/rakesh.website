export const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl w-full">
      {children}
    </div>
  );
};
