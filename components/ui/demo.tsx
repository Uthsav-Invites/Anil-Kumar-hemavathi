import ImageMasking from '@/components/ui/image-masking';
import React from 'react';

const ComponentDemo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-zinc-900 min-h-[500px]">
            <div className="w-full max-w-4xl border rounded-lg shadow-md p-6 bg-white dark:bg-black">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-gray-100 font-traditional">
                    Clipped Splash Gallery Demo
                </h2>
                <ImageMasking />
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center font-serif italic">
                    This demo showcases the beautiful splash masking effect for your wedding gallery.
                </p>
            </div>
        </div>
    );
};

export { ComponentDemo as DemoOne };
