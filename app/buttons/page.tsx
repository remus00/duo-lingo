import { Button } from '@/components/ui/button';

const ButtonsPage = () => {
    return (
        <div className="flex max-w-[200px] flex-col space-y-4 p-4">
            <Button>DEFAULT</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutline">Primary Outline</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dangerOutline">DangerOutline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="sidebarOutline">SecondaryOutline</Button>
        </div>
    );
};

export default ButtonsPage;
