---
tags: [waveguides]
author: Sumon Sinha
source: 
- https://bit.ly/3mVOiGU
- https://bit.ly/3tl9Qiw
---
link: [[optical fiber]]
Go Back: [[Course - Optical Fiber]]

# Need for Light in Tele-Communication
We need light for tele-communication because light has much larger bandwidth because of much higher frequency than microwave and radio waves. In order to do that, we need to guide light through curves and corners which can be done via optical fiber.

# Salient Features of Optical Fiber
The following are the salient features of an optical fiber-

### Structure of the fiber
- Consists of core and cladding.
	- Core extends in the region $0<r<a$ and cladding extends in the region $a<r<b$.
	- Core has refractive index (RI) of $n_1$ and cladding has RI of $n_2$ where *relative index difference* is given by $$\Delta=\frac{n_1^2-n_2^2}{2n_1^2}$$
	- For practical fibers, $n_1\sim n_2$ and these fibers are known as **weakly guided fibers**. Also the *relative index difference* for these fibers can be approximated as, $$\Delta\sim\frac{n_1-n_2}{n_1}$$
### Need for studying light guidance
- Data is sent through optical fiber in form of light pulses.
- By studying light guidance we can control the parameters as per our requirements and also we can learn what happens to light pulses when they travel through optical fiber.
### Ray theory of light guidance
- Light guidance through optical fiber is goverened by [[Total Internal Reflection]] (TIR).
### Meridional rays
- Light guided through optical fiber when crosses the axis of the fiber, these rays are known as **meridional rays**.

![[Meridional rays.png]]
- To find out if all rays are guided through the fiber or is it a certain range of angles that are guided, we look at the condition of TIR
	- For TIR at core-clad interface, $\phi>\phi_c$ or $\frac{\pi}{2}-\theta>\phi_c$ where, $n_0\sin i=n_1\sin\theta$ and $\sin\phi_c=\frac{n_2}{n_1}$
	![[Meridional rays TIR condition.png]]
	- This condition can be further simplified as,
	$$\begin{equation*}
		\begin{aligned}
			\theta &< \frac{\pi}{2}-\phi_c \\
			\sin\theta &< \cos\phi_c \\
			n_1\sin\theta &< n_1\cos\phi_c \\
			n_0\sin i &< n_1\sqrt{\left(1-\frac{n_2^2}{n_1^2}\right)} ,\qquad \text{where},\ \cos\phi_c=\sqrt{\left(1-\frac{n_2^2}{n_1^2}\right)}
		\end{aligned}
	\end{equation*}$$
	- Finally, $\sin i_{max}=\frac{\sqrt{n_1^2-n_2^2}}{n_0}$ defines the maximum acceptance angle for successive TIR inside fiber.
		- For outside medium as air, $n_0=1$ so, $\sin i_{max}=\sqrt{n_1^2-n_2^2}$.
		- If $\frac{\sqrt{n_1^2-n_2^2}}{n_0}>1$, then $\sin i_{max}=1$
	![[Acceptance cone of angles Meridional Rays 1.png]]
	![[Acceptance cone of angles Meridional Rays 2.png]]
### Skew rays
- When light guided through optical fiber doesn't cross the axis of the fiber and rather moves in a helical path, these rays are known as **skew rays**.

![[Skew rays.png]]
### Light gathering capacity of fiber
-  This is also known as the **Numerical Aperture** of the fiber.
### Graded-index fibers
### Ray paths in graded-index fibers

