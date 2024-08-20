interface CategoryButtonProps {
    category: string;
    isSelected: boolean;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isSelected, onClick }) => (
    <button
        className={`px-4 py-2 border-2 rounded-lg transition duration-300 ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white`}
        onClick={onClick}
    >
        {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
);

export default CategoryButton;
