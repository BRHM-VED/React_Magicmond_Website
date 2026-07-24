import {
  Palette, Laptop, TrendingUp, Rocket, HardHat, Trophy, Building2, Sparkles,
  ShoppingBag, Gem, Smartphone, Monitor, Settings, Store, Megaphone, Users,
  Zap, Headphones, type LucideIcon,
} from 'lucide-react';
import { cn } from '../../../utils/constants/cn';

/** Icon-name → component map for the IT services data files. */
const ICONS: Record<string, LucideIcon> = {
  Palette, Laptop, TrendingUp, Rocket, HardHat, Trophy, Building2, Sparkles,
  ShoppingBag, Gem, Smartphone, Monitor, Settings, Store, Megaphone, Users,
  Zap, Headphones,
};

interface Props {
  icon: string;
  className?: string;
}

/** Purple circular icon badge used across the IT services sections. */
export function IconBadge({ icon, className }: Props) {
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-full bg-[#692083]/40 border border-[#c055e5]/30 flex items-center justify-center shrink-0',
        className,
      )}
    >
      <Icon size={22} className="text-[#e0b6ff]" />
    </div>
  );
}
export default IconBadge;
