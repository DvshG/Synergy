import { School, SchoolFilters } from '../types/school';

// Mock data for demonstration
const mockSchools: School[] = [
  {
    id: '1',
    name: 'Government Higher Secondary School',
    state: 'Kerala',
    district: 'Thiruvananthapuram',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'in-progress',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Excellent',
    studentCount: 1200,
    teacherCount: 45,
    facilities: ['Library', 'Computer Lab', 'Science Lab', 'Sports Ground'],
    type: 'government',
    coordinates: { lat: 8.5241, lng: 76.9366 },
  },
  {
    id: '2',
    name: "St. Mary's School",
    state: 'West Bengal',
    district: 'Kolkata',
    currentStructure: 'Standard Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'completed',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Satisfactory',
    studentCount: 800,
    teacherCount: 32,
    facilities: ['Library', 'Computer Lab'],
    type: 'private',
    coordinates: { lat: 22.5726, lng: 88.3639 },
  },
  {
    id: '3',
    name: 'Little Flower School',
    state: 'Tamil Nadu',
    district: 'Chennai',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'pending',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Good',
    studentCount: 600,
    teacherCount: 25,
    facilities: ['Library', 'Playground'],
    type: 'private',
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    id: '4',
    name: 'Modern Public School',
    state: 'Karnataka',
    district: 'Bangalore',
    currentStructure: 'Standard Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'completed',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Excellent',
    studentCount: 1500,
    teacherCount: 60,
    facilities: ['Library', 'Science Lab', 'Sports Ground', 'Canteen'],
    type: 'private',
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    id: '5',
    name: 'Spring Valley High School',
    state: 'Punjab',
    district: 'Amritsar',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'in-progress',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Good',
    studentCount: 1100,
    teacherCount: 40,
    facilities: ['Library', 'Computer Lab', 'Sports Ground'],
    type: 'government',
    coordinates: { lat: 31.634, lng: 74.8723 },
  },
  {
    id: '6',
    name: 'Bright Future Academy',
    state: 'Maharashtra',
    district: 'Mumbai',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'in-progress',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Satisfactory',
    studentCount: 900,
    teacherCount: 35,
    facilities: ['Library', 'Computer Lab', 'Sports Ground'],
    type: 'government',
    coordinates: { lat: 19.076, lng: 72.8777 },
  },
  {
    id: '7',
    name: 'City Public School',
    state: 'Delhi',
    district: 'New Delhi',
    currentStructure: 'Standard Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'completed',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Excellent',
    studentCount: 1000,
    teacherCount: 50,
    facilities: ['Library', 'Canteen', 'Sports Ground', 'Computer Lab'],
    type: 'private',
    coordinates: { lat: 28.6139, lng: 77.209 },
  },
  {
    id: '8',
    name: 'Green Valley School',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'pending',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Good',
    studentCount: 700,
    teacherCount: 28,
    facilities: ['Library', 'Playground'],
    type: 'government',
    coordinates: { lat: 26.8467, lng: 80.9462 },
  },
  {
    id: '9',
    name: 'Global Academy',
    state: 'Rajasthan',
    district: 'Jaipur',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'in-progress',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Satisfactory',
    studentCount: 950,
    teacherCount: 38,
    facilities: ['Library', 'Science Lab', 'Computer Lab'],
    type: 'government',
    coordinates: { lat: 26.9124, lng: 75.7873 },
  },
  {
    id: '10',
    name: 'Blue Bells High School',
    state: 'Gujarat',
    district: 'Ahmedabad',
    currentStructure: 'Standard Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'completed',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Excellent',
    studentCount: 1300,
    teacherCount: 52,
    facilities: ['Library', 'Computer Lab', 'Sports Ground', 'Canteen'],
    type: 'private',
    coordinates: { lat: 23.0225, lng: 72.5714 },
  },
  {
    id: '11',
    name: 'Heritage Public School',
    state: 'Odisha',
    district: 'Bhubaneswar',
    currentStructure: 'Odd Structure',
    recommendedStructure: 'Standard Structure',
    transitionStatus: 'pending',
    lastUpdated: new Date().toISOString(),
    performanceBand: 'Good',
    studentCount: 850,
    teacherCount: 30,
    facilities: ['Library', 'Science Lab'],
    type: 'government',
    coordinates: { lat: 20.2961, lng: 85.8245 },
  },
];

export const searchSchools = async (
  searchTerm: string,
  filters: SchoolFilters,
  page: number
): Promise<{ schools: School[]; total: number }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredSchools = [...mockSchools];

  // Apply search term
  if (searchTerm) {
    filteredSchools = filteredSchools.filter(
      (school) =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.district.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Apply filters
  if (filters.category) {
    filteredSchools = filteredSchools.filter((school) =>
      school.currentStructure
        .toLowerCase()
        .includes(filters.category.toLowerCase())
    );
  }

  if (filters.state) {
    filteredSchools = filteredSchools.filter(
      (school) => school.state.toLowerCase() === filters.state.toLowerCase()
    );
  }

  if (filters.type) {
    filteredSchools = filteredSchools.filter(
      (school) => school.type.toLowerCase() === filters.type.toLowerCase()
    );
  }

  if (filters.performanceBand) {
    filteredSchools = filteredSchools.filter(
      (school) =>
        school.performanceBand.toLowerCase() ===
        filters.performanceBand.toLowerCase()
    );
  }

  if (filters.facilities.length > 0) {
    filteredSchools = filteredSchools.filter((school) =>
      filters.facilities.every((facility) =>
        school.facilities
          .map((f) => f.toLowerCase())
          .includes(facility.toLowerCase())
      )
    );
  }

  // Pagination
  const itemsPerPage = 10;
  const start = (page - 1) * itemsPerPage;
  const paginatedSchools = filteredSchools.slice(start, start + itemsPerPage);

  return {
    schools: paginatedSchools,
    total: filteredSchools.length,
  };
};
