import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';

type Props = {
    id: number;
    title: string;
    imageSrc: string;
    onClick: (id: number) => void;
    disable?: boolean;
    active?: boolean;
};

export const Card = ({ id, title, imageSrc, onClick, disable, active }: Props) => {
    return (
        <div
            onClick={() => onClick(id)}
            className={cn(
                'flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 hover:bg-black/5 active:border-b-2',
                disable && 'pointer-events-none opacity-50'
            )}
        >
            <div className="flex min-h-[24px] w-full items-center justify-end">
                {active && (
                    <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
                        <CheckIcon className="h-4 w-4 stroke-[4] text-white" />
                    </div>
                )}
            </div>

            <Image
                src={imageSrc}
                width={93.33}
                height={70}
                alt={title}
                className="rounded-lg border object-cover drop-shadow-md"
            />
            <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
        </div>
    );
};
