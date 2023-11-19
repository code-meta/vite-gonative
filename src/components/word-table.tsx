import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { setNext, setPrevious, setWords } from "@/app/features/wordSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "@/api";
import { TableSkeleton } from "./table-skeleton";

export function WordTable() {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.word.words);
  const next = useAppSelector((state) => state.word.next);
  const previous = useAppSelector((state) => state.word.previous);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const res = await api.get("words/");
        console.log(res.data);
        dispatch(setWords(res.data.results));
        dispatch(setNext(res.data.next));
        dispatch(setPrevious(res.data.previous));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const nextPage = async () => {
    if (!next) return;
    setIsLoading(true);

    try {
      const res = await axios.get(next);
      console.log(res.data);
      dispatch(setWords(res.data.results));
      dispatch(setNext(res.data.next));
      dispatch(setPrevious(res.data.previous));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const previousPage = async () => {
    if (!previous) return;
    setIsLoading(true);
    try {
      const res = await axios.get(previous);
      console.log(res.data);
      dispatch(setWords(res.data.results));
      dispatch(setNext(res.data.next));
      dispatch(setPrevious(res.data.previous));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <TableSkeleton />;

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Words</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {words.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.word}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => previousPage()}
            disabled={!previous}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => nextPage()}
            disabled={!next}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
