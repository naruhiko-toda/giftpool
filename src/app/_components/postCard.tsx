import { Card } from "@mui/material";
import React from "react";

export const PostCard = (props: { id: number; body: string }) => <Card>{props.body}</Card>;
