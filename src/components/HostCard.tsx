import { Card, CardContent, CardHeader, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Wifi, WifiOff, Clock } from "lucide-react";
import { cn } from "@/lib/utils";


export interface Host {
    id: string;
    name: string;
    status: "online" | "offline";
    latency: number | null;
    lastChecked: Date;

}

interface HostCardProps {
    host: Host;
    classNAme?: string;
}

export function HostCard({ host, className }: HostCardProps) {
    const isOnline = host.status === 'Online';

    return (
        <Card 
           className={cn(
            "relative overflow-hidden transition-all duration-300 hover:scale-105",
            "bg-gradient-to-br from-card to-card/80",
            "border border-border/50 hover:border-border",
            isOnline && "shadow-[0_0_20px_hsl(var(--success)/0.3)]",
            !isOnline && "shadow-[0_0_20px_hsl(var(--destructive)/0.3)]",
            className
           )}
        >
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-cener gap-2">
                        {isOnline ? (
                            <wifi className="w-5 h-5 text-success" />
                        ) : (
                            <WifiOff className="w-5 h-5 text-destructive" />
                        )}
                        <h3 className="font-semibold text-foreground truncate">{host.name}</h3>
                      </div>
                      <Badge>
                        variant={isOnline ? "defautl" : "destructive"}
                        className={cn(
                            "text-xs font-medium",
                            isOnline && "bg-success text-sucess-foreground",
                        )}
                        
                     {host.status.toUpperCase()}
                      </Badge>

                    </div>

                </div>
        </Card>
    )
}