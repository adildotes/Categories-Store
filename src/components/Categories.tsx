import { Dispatch, SetStateAction } from 'react';
import CategoryButton from './CategoryButton';

interface CategoriesProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const Categories: React.FC<CategoriesProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map(category => (
                <CategoryButton
                    key={category}
                    category={category}
                    isSelected={category === selectedCategory}
                    onClick={() => setSelectedCategory(category)}
                />
            ))}
        </div>
    );
}

export default Categories;
