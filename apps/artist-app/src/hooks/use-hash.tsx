"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import queryString from "query-string";

export const useURLHash = () => {
  const getCurrentHash = useMemo(
    () => () =>
      typeof window !== "undefined"
        ? window.location.hash.replace(/^#!?/, "")
        : "",
    []
  );
  const router = useRouter();
  const params = useParams();
  const [hash, _setHash] = useState<string>(getCurrentHash());

  const setHash = (newHash: string) => {
    let updatedUrl = window.location.href;
    updatedUrl = queryString.stringifyUrl({
      url: updatedUrl.split("#")[0],
      fragmentIdentifier: newHash,
    });

    _setHash(newHash);
    router.replace(updatedUrl);
  };
  useEffect(() => {
    const currentHash = getCurrentHash();
    _setHash(currentHash);
  }, [params]);

  const handleHashChange = () => {
    const currentHash = getCurrentHash();
    _setHash(currentHash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { hash, setHash } as const;
};
