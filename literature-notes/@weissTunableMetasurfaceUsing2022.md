# Notes
## Intro
- [[Metasurfaces]] are great at controlling phase, amplitude and polarisation. These are based on light interaction with metallic or dielectric nanostructures and have a unique property for field enhancement.
- These have been used in various optical devices such as beam shifters, flat lenses, holographic imagers and they are promising platforms for [[LIDAR]], SLM, solar cell and general light-matter interaction enhancement.
- Some metasurface realizations are based on [[localised surface plasmon resonance|LSPR]] which can be further enhanced using [[surface lattice resonance]].
- Since [[Metasurfaces|metasurface]] design meaning material selection and geometrical structure defines the optical response, it is rather limiting to tune the [[Metasurfaces|metasurfaces]] after fabrication which leads to its use in only static implementations. This limitation was tried to be overcome using [[MEMS]] (microelectromechanical system) which can move the static [[Metasurfaces|metasurface]] or change the optical path leading to change in optical response. 
	- Other approaches include [[thermo-optic effect]], phase changing media, structural reconfigurations and electrochemical or chemical reactions. These approaches demonstrate changes in RI but their reponse is typically slow which makes it difficult to be used for communication or [[LIDAR]] technologies.
	- [[Electro-Optic effect]] can also be used for high speed modulation but the modulation strength is usually low. 
- LiNbO3 has high EO coefficients of $r_{33} = 31.45\ pm/V$ in the extraordinary axis and $r_{13} = 10.12\ pm/V$ in the ordinary axis. Also it has a wide optical transparency range of about $0.35 - 4.5\ \mu m$ and high speed modulation rate of $100\ GHz$. 
- Current optical modulators operate in hundred of gigahertz range but it is realized in photonic waveguides so in this paper, optical modulator is realized **in free space** using [[Electro-Optic effect|Pockels effect]] in LiNbO3.

## Device Design and Working Principle
![[Pasted image 20220202064559.png]]

- The structure is shown in above figure. It exhibites 3 resonance phenomena - [[localised surface plasmon resonance|LSPR]], [[surface lattice resonance|SLR]], FP resonance. The last one is due to the cavity between Cr/Au layer and ITO. 
	- [[localised surface plasmon resonance|LSPR]] is due to the momentum matching between the incident wave with specific wavelength and metallic plasmons. It is affected by the shape, material and dimensions of the NP.
	- [[surface lattice resonance|SLR]] is due to the periodic arrangement of the NPs under the condition that the spacing between the NPs can hold a standing wave. Resonance wavelength can be determined by $$\lambda = na,$$where $n$ is the RI of the lattice environment and $a$ is the periodicity of the lattice.
	- FP resonance is due to the cavity between the Cr/Au layer and ITO layer. The resonace wavelength for a nonsymmetrical cavity is found using the [[Fresnel coefficients]] for which the [[electric field]] experiences a destructive [[interference]] in the reflected beam from the top ITO layer.
- All of these resonances can be coupled together for maximum field enhancement by optimising the parameters such as **thickness of LiNbO3 film, height and diameter of nanodisk and period between the nanodisks**.

![[Pasted image 20220405152606.png]]

- To see how changing a single parameter changes the resonance wavelength and resonance shape, fig. 2(a) is shown. It shows the reflection intensity variation with wavelength ranging from $1.1\mu$ to $1.8\mu$ and LiNbO thickness variation ranging from $250nm$ to $600nm$. 
	- As can be seen, the LiNbO thickness has a strong effect on the depth and spectral position of the central resonance wavelength. As we detune the thickness further away from the optimum, the resonance matching depreciates up to a point where the resonance vanishes completely.
- [] 










---

# Metadata
title:: Tunable Metasurface Using Thin-Film Lithium Niobate in the Telecom Regime
authors:: Aharon Weiss, Christian Frydendahl, Jonathan Bar-David, Roy Zektzer, Eitan Edrei, Jacob Engelberg, Noa Mazurski, Boris Desiatov, Uriel Levy
DOI:: 10.1021/acsphotonics.1c01582