/**
 * v0 by Vercel.
 * @see https://v0.dev/t/49VwgnSdzuS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                <div className="bg-gray-100/30 dark:bg-gray-800/30">
                    <div className="container grid gap-4 px-4 py-6 md:py-12 md:px-6">
                        <div className="grid gap-2">
                            <div className="text-center">
                                <Image
                                    alt="Avatar"
                                    className="mx-auto aspect-square rounded-full overflow-hidden object-cover"
                                    height="160"
                                    src="/placeholder.svg"
                                    width="160"
                                />
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Jane Smith</h1>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Hi, I'm Jane. I'm a passionate developer who loves creating web applications that make people's lives
                                    easier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 lg:p-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                        <p className="text-gray-500 dark:text-gray-400">Here are some of the projects I've been working on.</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-4">
                                <Image
                                    alt="Project"
                                    className="aspect-video overflow-hidden rounded-lg object-cover"
                                    height="180"
                                    src="/placeholder.svg"
                                    width="320"
                                />
                            </CardContent>
                            <CardFooter className="flex items-center p-4">
                                <h3 className="font-bold">Project One</h3>
                                <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">Description of project one.</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <Image
                                    alt="Project"
                                    className="aspect-video overflow-hidden rounded-lg object-cover"
                                    height="180"
                                    src="/placeholder.svg"
                                    width="320"
                                />
                            </CardContent>
                            <CardFooter className="flex items-center p-4">
                                <h3 className="font-bold">Project Two</h3>
                                <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">Description of project two.</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <Image
                                    alt="Project"
                                    className="aspect-video overflow-hidden rounded-lg object-cover"
                                    height="180"
                                    src="/placeholder.svg"
                                    width="320"
                                />
                            </CardContent>
                            <CardFooter className="flex items-center p-4">
                                <h3 className="font-bold">Project Three</h3>
                                <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">Description of project three.</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <Image
                                    alt="Project"
                                    className="aspect-video overflow-hidden rounded-lg object-cover"
                                    height="180"
                                    src="/placeholder.svg"
                                    width="320"
                                />
                            </CardContent>
                            <CardFooter className="flex items-center p-4">
                                <h3 className="font-bold">Project Four</h3>
                                <p className="ml-auto text-sm text-gray-500 dark:text-gray-400">Description of project four.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <div className="bg-gray-100/30 dark:bg-gray-800/30">
                    <div className="container grid gap-4 px-4 py-6 md:py-12 md:px-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="flex items-center gap-4">

                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">

                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">

                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">

                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">

                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-8 lg:p-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                        <p className="text-gray-500 dark:text-gray-400">Want to get in touch? Send me a message.</p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label className="text-lg" htmlFor="name">
                                Name
                            </Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-lg" htmlFor="email">
                                Email
                            </Label>
                            <Input id="email" placeholder="Enter your email" type="email" />
                        </div>
                        <div className="grid gap-2">
                            <Label className="text-lg" htmlFor="message">
                                Message
                            </Label>
                            <Textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" />
                        </div>
                        <Button size="lg">Submit</Button>
                    </div>
                </div>
            </div>
            <footer className="flex items-center justify-center w-full py-4 border-t shrink-0 text-sm bg-gray-100/40 dark:bg-gray-800/40">
                Made with love by the Vercel team
            </footer>
        </div>
    )
}

