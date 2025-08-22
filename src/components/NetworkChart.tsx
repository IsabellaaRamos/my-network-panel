import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export interface ChartDataPoint {
  timestamp: string;
  time: string;
  [key: string]: number | string; // For dynamic host latencies
}

interface NetworkChartProps {
  data: ChartDataPoint[];
  hosts: string[];
  className?: string;
}

const colors = [
  'hsl(var(--primary))',
  'hsl(var(--success))',
  'hsl(var(--warning))', 
  'hsl(var(--destructive))',
  'hsl(200 100% 70%)',
  'hsl(280 100% 70%)',
];

export function NetworkChart({ data, hosts, className }: NetworkChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Network Latency Monitor
          </CardTitle>
          <Badge variant="outline" className="bg-card">
            Real-time
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                opacity={0.3} 
              />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                label={{ 
                  value: 'Latency (ms)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' }
                }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  color: 'hsl(var(--foreground))',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              
              {hosts.map((host, index) => (
                <Line
                  key={host}
                  type="monotone"
                  dataKey={host}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: colors[index % colors.length] }}
                  connectNulls={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {hosts.map((host, index) => (
            <Badge 
              key={host} 
              variant="outline" 
              className="bg-card"
              style={{ 
                borderColor: colors[index % colors.length],
                color: colors[index % colors.length] 
              }}
            >
              <div 
                className="w-2 h-2 rounded-full mr-2" 
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              {host}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
    