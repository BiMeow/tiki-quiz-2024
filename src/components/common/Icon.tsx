'use client';
import Icon from '@ant-design/icons';

const Arrow = () => (
	<svg width="1em" height="1em" viewBox="0 0 11 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.50005 0.995538C0.499686 1.12361 0.523235 1.25016 0.568966 1.36588C0.614697 1.48159 0.681446 1.58354 0.764311 1.66423L5.04962 5.80498C5.17742 5.93107 5.33772 6 5.50315 6C5.66858 6 5.82888 5.93107 5.95668 5.80498L10.242 1.51849C10.3878 1.37297 10.4796 1.16387 10.497 0.937177C10.5144 0.710485 10.4561 0.484775 10.3348 0.3097C10.2136 0.134626 10.0394 0.0245285 9.85054 0.00362778C9.66168 -0.0172729 9.47364 0.0527353 9.32779 0.198252L5.49958 4.03037L1.67137 0.326847C1.56653 0.222013 1.43887 0.155421 1.30349 0.13495C1.16811 0.114478 1.03068 0.140983 0.907457 0.211329C0.784235 0.281675 0.680379 0.392918 0.608179 0.531895C0.535978 0.670871 0.498455 0.831765 0.50005 0.995538Z" />
	</svg>
);
export const IconArrow = (props: any) => <Icon component={Arrow} {...props} />;

const Search = () => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M13.4 13.4L10.7084 10.7036M12.2 7.1C12.2 8.4526 11.6627 9.74981 10.7062 10.7062C9.74981 11.6627 8.4526 12.2 7.1 12.2C5.7474 12.2 4.45019 11.6627 3.49376 10.7062C2.53732 9.74981 2 8.4526 2 7.1C2 5.7474 2.53732 4.45019 3.49376 3.49376C4.45019 2.53732 5.7474 2 7.1 2C8.4526 2 9.74981 2.53732 10.7062 3.49376C11.6627 4.45019 12.2 5.7474 12.2 7.1Z"
			strokeWidth="1.6"
			strokeLinecap="round"
		/>
	</svg>
);
export const IconSearch = (props: any) => <Icon component={Search} {...props} />;

const Language = () => (
	<svg width="1em" height="1em" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 16.5C3.58878 16.5 0 12.9112 0 8.5C0 4.08878 3.58878 0.5 8 0.5C12.4112 0.5 16 4.08878 16 8.5C16 12.9112 12.4112 16.5 8 16.5ZM8 1.28753C4.02299 1.28753 0.78753 4.52299 0.78753 8.5C0.78753 12.477 4.02299 15.7125 8 15.7125C11.977 15.7125 15.2125 12.477 15.2125 8.5C15.2125 4.52299 11.977 1.28753 8 1.28753Z" />
		<path d="M8.00029 16.5C5.64694 16.5 3.80341 12.986 3.80341 8.5C3.80341 4.014 5.64694 0.5 8.00029 0.5C10.3536 0.5 12.1972 4.014 12.1972 8.5C12.1972 12.986 10.3536 16.5 8.00029 16.5ZM8.00029 1.28753C6.15221 1.28753 4.59093 4.59042 4.59093 8.5C4.59093 12.4096 6.15221 15.7125 8.00029 15.7125C9.84837 15.7125 11.4096 12.4096 11.4096 8.5C11.4096 4.59041 9.84837 1.28753 8.00029 1.28753Z" />
		<path d="M15.6019 8.89373H0.393682C0.176208 8.89373 0 8.71744 0 8.49997C0 8.28249 0.176208 8.1062 0.393682 8.1062H15.6019C15.8193 8.1062 15.9955 8.28249 15.9955 8.49997C15.9955 8.71744 15.8193 8.89373 15.6019 8.89373Z" />
		<path d="M7.9999 16.5C7.78243 16.5 7.60614 16.3237 7.60614 16.1062V0.893765C7.60614 0.67629 7.78243 0.5 7.9999 0.5C8.21738 0.5 8.39367 0.67629 8.39367 0.893765V16.1062C8.39367 16.3237 8.21738 16.5 7.9999 16.5Z" />
		<path d="M14.5886 12.697H1.41126C1.19379 12.697 1.01758 12.5207 1.01758 12.3032C1.01758 12.0857 1.19379 11.9094 1.41126 11.9094H14.5886C14.8061 11.9094 14.9823 12.0857 14.9823 12.3032C14.9823 12.5207 14.8061 12.697 14.5886 12.697Z" />
		<path d="M14.5886 5.09051H1.41126C1.19379 5.09051 1.01758 4.91422 1.01758 4.69674C1.01758 4.47927 1.19379 4.30298 1.41126 4.30298H14.5886C14.8061 4.30298 14.9823 4.47927 14.9823 4.69674C14.9823 4.91422 14.8061 5.09051 14.5886 5.09051Z" />
	</svg>
);
export const IconLanguage = (props: any) => <Icon component={Language} {...props} />;

const Facebook = () => (
	<svg width="10" height="18" viewBox="0 0 10 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.7777 10.3331H8.99992L9.88881 6.77751H6.7777V4.99973C6.7777 4.08417 6.7777 3.22195 8.55548 3.22195H9.88881V0.235284C9.59904 0.197062 8.50481 0.11084 7.34926 0.11084C4.93593 0.11084 3.22215 1.58373 3.22215 4.28862V6.77751H0.555481V10.3331H3.22215V17.8886H6.7777V10.3331Z" />
	</svg>
);
export const IconFacebook = (props: any) => <Icon component={Facebook} {...props} />;

const Youtube = () => (
	<svg width="13" height="16" viewBox="0 0 13 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.12791 15.4524C1.70651 15.7263 1.28006 15.7423 0.848545 15.5004C0.417032 15.2586 0.200855 14.8844 0.200012 14.3778V1.29339C0.200012 0.787706 0.416189 0.413504 0.848545 0.170778C1.2809 -0.0719481 1.70736 -0.0559348 2.12791 0.218817L12.4311 6.76104C12.8104 7.01388 13 7.37207 13 7.83561C13 8.29915 12.8104 8.65734 12.4311 8.91018L2.12791 15.4524Z" />
	</svg>
);
export const IconYoutube = (props: any) => <Icon component={Youtube} {...props} />;

const Tiktok = () => (
	<svg width="15" height="16" viewBox="0 0 15 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.9471 2.50667C11.3394 1.813 11.0046 0.922162 11.0048 0H8.25817V11.0222C8.23699 11.6187 7.98517 12.1837 7.55574 12.5982C7.12631 13.0127 6.55279 13.2444 5.95595 13.2444C4.69373 13.2444 3.64484 12.2133 3.64484 10.9333C3.64484 9.40444 5.12039 8.25778 6.64039 8.72889V5.92C3.57373 5.51111 0.889282 7.89333 0.889282 10.9333C0.889282 13.8933 3.34262 16 5.94706 16C8.73817 16 11.0048 13.7333 11.0048 10.9333V5.34222C12.1186 6.14209 13.4558 6.57124 14.8271 6.56889V3.82222C14.8271 3.82222 13.1559 3.90222 11.9471 2.50667Z" />
	</svg>
);
export const IconTiktok = (props: any) => <Icon component={Tiktok} {...props} />;

const ArrowBack = () => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 12 13"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M9.5 6.5H2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M6 10L2.5 6.5L6 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const IconArrowBack = (props: any) => <Icon component={ArrowBack} {...props} />;
