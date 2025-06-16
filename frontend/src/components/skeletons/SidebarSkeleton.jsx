import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-100 border-end d-flex flex-column transition"
      style={{ width: '5rem', transition: 'all 0.2s' }} // Default collapsed width (like w-20)
    >
      {/* Header */}
      <div className="border-bottom w-100 p-3 d-flex align-items-center gap-2">
        <Users size={24} />
        <span className="fw-medium d-none d-lg-block">Contacts</span>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-auto py-3 w-100">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="p-3 d-flex align-items-center gap-3 w-100">
            {/* Avatar skeleton */}
            <div className="position-relative mx-auto mx-lg-0">
              <div
                className="bg-secondary bg-opacity-25 rounded-circle"
                style={{
                  width: '3rem',
                  height: '3rem',
                  animation: 'pulse 1.5s infinite'
                }}
              />
            </div>

            {/* User info skeleton - only on large screens */}
            <div className="d-none d-lg-block text-start flex-grow-1">
              <div
                className="bg-secondary bg-opacity-25 mb-2 rounded"
                style={{ height: '1rem', width: '8rem', animation: 'pulse 1.5s infinite' }}
              />
              <div
                className="bg-secondary bg-opacity-25 rounded"
                style={{ height: '0.75rem', width: '4rem', animation: 'pulse 1.5s infinite' }}
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
