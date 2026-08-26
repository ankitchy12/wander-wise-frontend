import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Field, FieldError, FieldLabel } from "../components/ui/field";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const formschema = z.object({
  email: z.string().email().min(5, "must be atleast 5 characters").trim(),
  password: z.string().min(8, "must be atleast 8 characters").trim(),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formschema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-dvh bg-teal-900 pt-20">
      <div className="w-2/5 mx-auto bg-white rounded-lg grid grid-cols-2 h-110 overflow-hidden">
        <div className="w-full h-full overflow-hidden">
            <img className="h-full" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wanderwise login" ></img>
        </div>
        <div>
            <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>

            <Card className={"h-full flex flex-col justify-evenly"}>
                <CardHeader>
                    <CardTitle>Login to Wanderwise</CardTitle>
                    <CardDescription>Enter your credentials to continue.</CardDescription>
                    <CardAction>
                        <img src="/wanderwiseLogo.png" alt="wanderwise logo" className='w-12' />
                    </CardAction>
                </CardHeader>

                <CardContent className="space-y-4">

                     <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Enter your email</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                      <Controller
                        name="password"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Enter your password</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    type="password"
                                    placeholder="********"
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                </CardContent>

                <CardFooter>
                    <Button type="submit">Login</Button>
                </CardFooter>

            </Card>

        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
