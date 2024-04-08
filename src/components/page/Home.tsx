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

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                <div className="bg-gray-100/30 dark:bg-gray-800/30">
                    <div className="container grid gap-4 px-4 py-6 md:py-12 md:px-6">
                        <div className="grid gap-2">
                            <div className="text-center">
                                <img
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
                                <img
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
                                <img
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
                                <img
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
                                <img
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
                                    <CodeIcon className="h-6 w-6" />
                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <TerminalIcon className="h-6 w-6" />
                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GlobeIcon className="h-6 w-6" />
                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <DatabaseIcon className="h-6 w-6" />
                                    <div className="grid w-1/2">
                                        <div />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <LayoutIcon className="h-6 w-6" />
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

function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function DatabaseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}


function GlobeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}


function LayoutIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="3" x2="21" y1="9" y2="9" />
            <line x1="9" x2="9" y1="21" y2="9" />
        </svg>
    )
}


function TerminalIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" x2="20" y1="19" y2="19" />
        </svg>
    )
}