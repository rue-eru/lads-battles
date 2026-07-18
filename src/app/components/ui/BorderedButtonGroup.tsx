import type { BorderedButtonGroupProps } from "@/app/utils/interfaces-data";

export function BorderedButtonGroup<T extends string>({
    items,
    activeItem,
    onSelect,
    getLabel,
    getKey,
    className = ''
}: BorderedButtonGroupProps<T>) {


    return(
        <div className={`flex ${className}`}>
            {items.map((item) => (
                <button
                    key={getKey(item)}
                    onClick={() => onSelect(item)}
                    className={`px-4 font-medium uppercase font-accent border-l-2 border-white first:border-none cursor-pointer 
                        ${item === 'en' ? 'text-base' : ''}
                        ${
                        activeItem === item 
                            ? ' text-pink-400 ' 
                            : 'text-white hover:bg-pink-400'
                    }`}
                >
                    {getLabel(item)}
                </button>
            ))}
        </div>    
    )
}