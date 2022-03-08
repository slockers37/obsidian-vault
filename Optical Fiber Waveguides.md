# Optical Fiber Waveguides
- For planar waveguides, the fields are of the type $$\vec{\mathcal{E}}=\vec{E}(x)e^{i(\omega t-\beta z)}, \vec{\mathcal{H}}=\vec{H}(x)e^{i(\omega t-\beta z)}$$
- For rectangular waveguides, the fields are of the type $$\vec{\mathcal{E}}=\vec{E}(x,y)e^{i(\omega t-\beta z)}, \vec{\mathcal{H}}=\vec{H}(x,y)e^{i(\omega t-\beta z)}$$
- For optical fiber (cylindrical waveguide), the fields would be of the type $$\vec{\mathcal{E}}=\vec{E}(r,\phi)e^{i(\omega t-\beta z)}, \vec{\mathcal{H}}=\vec{H}(r,\phi)e^{i(\omega t-\beta z)}$$
- Using the fields for optical fiber in the Maxwell equations $$\vec{\nabla}\times\vec{\mathcal{E}}=-\mu_0\frac{\partial\vec{\mathcal{H}}}{\partial t}, \vec{\nabla}\times\vec{\mathcal{H}}=\epsilon\frac{\partial\vec{\mathcal{E}}}{\partial t},$$ we will get 6 equations in cylindrical polar coordinates.
	- These 6 equations are - 
	$$\begin{aligned}
	E_r &= -\frac{i}{[k_0^2n^2(r)-\beta^2]}\left[\beta\frac{\partial E_z}{\partial r}+\frac{\omega\mu_0}{r}\frac{\partial H_z}{\partial\phi}\right] \\
	E_{\phi} &= -\frac{i}{[k_0^2n^2(r)-\beta^2]}\left[\frac{\beta}{r}\frac{\partial E_z}{\partial\phi}-\omega\mu_0\frac{\partial H_z}{\partial r}\right] \\
	H_r &= -\frac{i}{[k_0^2n^2(r)-\beta^2]}\left[\beta\frac{\partial H_z}{\partial r}-\frac{\omega\epsilon_0 n^(r)}{r}\frac{\partial E_z}{\partial\phi}\right] \\
	H_{\phi} &= -\frac{i}{[k_0^2n^2(r)-\beta^2]}\left[\frac{\beta}{r}\frac{\partial H_z}{\partial\phi}+\omega\epsilon_0 n^(r)\frac{\partial E_z}{\partial r}\right] \\
	i\omega E_z &= \frac{1}{r}\left[\frac{\partial}{\partial r}(rH_{\phi})-\frac{\partial H_r}{\partial\phi}\right] \\
	-i\omega\mu_0 E_z &= \frac{1}{r}\left[\frac{\partial}{\partial r}(rE_{\phi})-\frac{\partial E_r}{\partial\phi}\right]
	\end{aligned}$$
- 