import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

export function TableSkeleton() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Skeleton className="h-6 w-[250px]" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-[250px]" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <Skeleton className="h-4 w-[20px]" />
          </Button>
          <Button variant="outline" size="sm">
            <Skeleton className="h-4 w-[20px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
